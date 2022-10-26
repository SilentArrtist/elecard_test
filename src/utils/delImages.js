export const getDellImgsArr = () => {
    return JSON.parse("["+localStorage.getItem("deletedImages")+"]");
}