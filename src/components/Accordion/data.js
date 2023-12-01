import { useState } from "react";

export const data = [
    {
        id: "panel1",
        question: "¿Qué es APUNTES CON NOTA?",
        answer:
            "APUNTES CON NOTA es una plataforma donde estudiantes universitarios pueden comprar apuntes de su carrera certificados con una nota mínima de 7. Los apuntes se adquieren en formato impreso y encuadernado, con opciones de recogerlos en tienda o recibirlos en casa. Los usuarios que suben apuntes a la plataforma ganan dinero cada vez que alguien compra sus apuntes. Fomenta el intercambio de conocimientos entre estudiantes y ofrece una solución para acceder a apuntes de calidad.",
    },
    {
        id: "panel2",
        question: "¿Cómo busco apuntes?",
        answer:
            "Introduce la universidad, facultad y grado y pulsa el botón “BUSCAR APUNTES”. Te saldrán todos los apuntes de tu carrera y podrás filtrar la búsqueda por curso y asignatura en el desplegable superior. ",
    },
    {
        id: "panel3",
        question: "¿Cómo vendo mis apuntes?",
        answer:
            "Pulsa el botón “VENDER APUNTES”. Se abrirá un formulario que deberás rellenar con los datos de la asignatura que quieres subir (recuerda que los apuntes deben estar hechos a ordenador, deben contener la asignatura completa y debes tener una nota mínima de 7 en esa asignatura). Una vez que has rellenado el formulario, debes adjuntar dos archivos. 1. PDF de la asignatura completa. 2. PDF de tu expediente académico donde se vea la nota de la asignatura que quieres subir. Una vez que has realizado todos estos pasos, pulsa el botón “ENVIAR SOLICITUD” y ¡ya estaría!",
    },
    {
        id: "panel4",
        question: "¿Cuánto dinero puedo ganar en APUNTES CON NOTA?",
        answer:
            "Si el documento de la asignatura que vendes tiene de 50 a 80 páginas, vas a ganar 2€ cada vez que alguien compre tus apuntes. Si tiene 81 páginas o más, vas a ganar 3€  cada vez que alguien compre tus apuntes. Si, somos la plataforma de apuntes que mejor paga. ",
    },
    {
        id: "panel5",
        question: "¿Dónde imprimo los apuntes?",
        answer:
            "Los apuntes que compras ya vienen impresos y encuadernados. Nosotros nos encargamos de imprimirlos y encuadernarlos. Tu solo tienes que preocuparte de estudiar y sacar buena nota. ",
    },
    {
        id: "panel6",
        question:
            "¿Cómo nos aseguramos de que los apuntes tienen una nota mínima de 7?",
        answer:
            "Los usuarios que suben sus apuntes están obligados a subir su expediente académico para que nuestros profesionales puedan revisar que los apuntes cumplen con todos los requisitos. ",
    },
    {
        id: "panel7",
        question: "¿Dónde recojo los apuntes?",
        answer:
            "Los apuntes los puedes recoger en alguna de nuestras tiendas o recibirlos en casa. ",
    },
    {
        id: "panel8",
        question:
            "¿Qué requisitos deben cumplir los apuntes para ser comercializables?",
        answer:
            "Para poder vender los apuntes, es necesario que abarquen la totalidad de la asignatura y estén redactados en formato digital, con una fuente de letra mecanografiada. Además, deben tener una extensión mínima de 50 páginas y el autor del material debe haber obtenido al menos una calificación de 7 en la asignatura que está compartiendo. Es importante destacar que los apuntes deben ser una creación original de los estudiantes, y no se permite copiar contenido directamente de libros de texto o insertar diapositivas elaboradas por el profesor.",
    },
    {
        id: "panel9",
        question: "¿Quién puede ver mi expediente académico?",
        answer:
            "El acceso al expediente académico está restringido y es confidencial. Únicamente el equipo de APUNTES CON NOTA tiene la autorización para visualizarlo, con el propósito de verificar que los apuntes cumplen con el requisito de calificación mínima de 7. En ningún caso, otros usuarios tienen permiso para acceder o visualizar dicho expediente, garantizando así la privacidad y seguridad de tu información académica.",
    },
];

const useToggleExpanded = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return { expanded, setExpanded, handleChange };
}

export {
    useToggleExpanded
}