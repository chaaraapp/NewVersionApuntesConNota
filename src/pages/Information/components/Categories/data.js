import { useEffect, useState } from "react";
import { Resumen } from "../../../../apis/apis";

const useFetchEditorInfo = (steper) => {

    const [editorId, setEditorId] = useState({});
    const [resumenApuntesData, setResumenApuntesData] = useState([]);
    const ResumenUtailty = new Resumen();

    useEffect(() => {

        steper === 4 && ResumenUtailty.getEditor(setEditorId);

    }, [steper]);

    useEffect(() => {

        if (editorId?.id) {

            ResumenUtailty.resumenApuntes(editorId?.id, setResumenApuntesData);

        }

    }, [editorId]);

    return { editorId, resumenApuntesData };

}

export {
    useFetchEditorInfo
}