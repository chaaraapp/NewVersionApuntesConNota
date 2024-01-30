import { useEffect, useState } from "react";
import { Curso } from "../../../../apis/apis";

const useCursoLoader = () => {

    const [cursoList, setCursoList] = useState([]);

    const CursoUtailty = new Curso();

    useEffect(() => {

        CursoUtailty.get(setCursoList);

    }, []);

    return { cursoList, setCursoList }

}

export {
    useCursoLoader
}