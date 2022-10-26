
import { React,useState,useMemo,useEffect,memo } from 'react';
import {useFetch} from "../hooks/useFetch";
import { getPagesCount } from '../utils/pages';
import ImagesService from "../API/ImagesService";
import ImgList from './Images/ImgList';
import FilterList from './Types/FilterList';
import OutputType from './Types/OutputType';
import Pagination from './UI/Pagination';
import '../styles/Wrapper.css'
import { getDellImgsArr } from '../utils/delImages';
const Wrapper = memo(() => {
    const [images,setImages] = useState([]);
    const [backupImages,setBackupImages] = useState([]);
    const [type, setType] = useState("images");
    const [filter, setFilter] = useState("")
    const limit=40;
    const [page,setPage] = useState(1);
    const [pagesCount,setPagesCount] = useState(0);
    const [fetchImages, isLoading, fetchError] = useFetch(async () => {
        const response = await ImagesService.getAll();
        const count = response.data.length;
        let imgs = await response.data;
        for (const deltimestamp of getDellImgsArr()) {
            imgs = imgs.filter(img=>img.timestamp!==deltimestamp)
        }
        setBackupImages(response.data);
        setImages(imgs);
        setPagesCount(getPagesCount(count,limit));
    })
    const sortedImagesForTree = useMemo(() => {
        if(filter!=="") {
            return images.sort((a, b) => JSON.stringify(a[filter]).localeCompare(JSON.stringify(b[filter])))
        }
        return images;
    }, [filter, images])

    const sortedImages = useMemo(() => {
        if(filter!=="") {
            const sortedImagesArray = images.sort((a, b) => JSON.stringify(a[filter]).localeCompare(JSON.stringify(b[filter])))
            return sortedImagesArray.slice((page-1)*limit,(page)*limit)
        }
        return images.slice((page-1)*limit,(page)*limit);
    }, [filter, images])

    useEffect(() => {
        fetchImages(limit, page)
    }, [page, limit])
    useEffect(()=>{
        if(!localStorage.getItem("deletedImages")){
            localStorage.setItem("deletedImages",[])
        }
    },[])
    const deleteImg = (timestamp)=>{ 
        const delArr = getDellImgsArr();
        delArr.push(timestamp)
        localStorage.setItem("deletedImages",[...delArr]);
        let imgs = images;
        for (const deltimestamp of getDellImgsArr()) {
            imgs = imgs.filter(img=>img.timestamp!==deltimestamp)
        }
        setImages(imgs);
    }
    const changePage = (page)=>{
        setPage(page);
    }
    const reset = ()=>{
        localStorage.setItem("deletedImages",[])
        setImages(backupImages);
    }
    return (
        <>
         {isLoading &&
            <div className="loader_wrapper">
                <div className="loader"></div>
            </div>
            ||
            <div className='wrapper'>
                <div className="settings_block">
                    <div className="radiobtns">
                        <OutputType type={type} setType={setType}/>
                        <FilterList filter = {filter} setFilter = {setFilter} />
                    </div>
                    <div className='resetBtn' onClick={()=>reset()}>
                        RESET
                    </div>
                </div>                
                <ImgList images={sortedImages} sortedImagesForTree = {sortedImagesForTree} type ={type} delFunc = {deleteImg}/>

                {type==="images"&&
                <Pagination 
                currentPage={page}
                changePage={changePage}
                pages={pagesCount}
                />
                }
            </div>
        }
        </>
       

    );
});

export default Wrapper;