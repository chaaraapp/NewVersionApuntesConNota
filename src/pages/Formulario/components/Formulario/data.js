import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
    { name: "Nota minima:7", key: "A" },
    { name: "Subir el temario completo", key: "M" },
    { name: "Escritura a ordenador", key: "P" },
    { name: "Formato PDF", key: "F" },
];

export const renderCategories = () => {

    return categories.map((category) => {
        return (
            <div key={category.key} className='checbox flex items-center mb-1'>

                <div className='rounded-[5px] flex items-center justify-center w-[25px] h-[25px] border border-white'>

                    <FontAwesomeIcon icon={faCheck} />

                </div>

                <label htmlFor={category.key} className='cursor-pointer mx-3 mb-0'>
                    {category.name}
                </label>

            </div>

        );
    })

}