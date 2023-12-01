import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data, useToggleExpanded } from './data';

export default function AccordionQuestions() {

    const { expanded, setExpanded, handleChange } = useToggleExpanded();

    const renderAccordion = data.map((item, index) => {

        return <Accordion className='!mb-5' key={index} expanded={expanded === (item.id)} onChange={handleChange(item.id)}>

            <AccordionSummary className='!bg-[var(--primary)] !rounded-[100px] before:!h-0 !text-white' expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content"  >

                <Typography className='flex-1 before:!h-0'> {item.question}</Typography>

            </AccordionSummary>

            <AccordionDetails>

                <Typography>  {item.answer} </Typography>

            </AccordionDetails>

        </Accordion>

    });

    return (

        <div className='accordion'>

            {renderAccordion}

        </div>

    );
}
