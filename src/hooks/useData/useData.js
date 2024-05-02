import { useState } from "react";
import { initialStates } from "../../utils/consts";
import { galleryData } from "./useDataConsts";

function useData() {
    const [data, setData] = useState(initialStates.data);

    const fetchData = () => {
        setData(galleryData);
    };

    return {
        data,
        fetchData
    };
};

export default useData;