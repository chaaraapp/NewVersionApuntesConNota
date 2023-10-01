import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { data } from './data';

export default function AccordionQuestions() {
    const [expanded, setExpanded] = useState(false);

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    const renderAccordion = data.map((item, index) => {

        return <Accordion className='!mb-5' key={index} expanded={expanded === (item.id)} onChange={handleChange(item.id)}>
            <AccordionSummary
                className='!bg-[var(--primary)] !text-white'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
            >
                <Typography className='flex-1'>
                    {item.question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>

    })
    return (
        <div className='accordion'>
            {renderAccordion}
        </div>
    );
}
