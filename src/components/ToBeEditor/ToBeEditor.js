import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useHandleSubmit } from "./data";

export default function NoSearchResult() {

    const { handelSubmit, checked, setChecked, alias, setAlias } = useHandleSubmit();

    return (

        <form onSubmit={handelSubmit} className='flex flex-col items-center justify-center' >

            <img src={require('./no-search-results.png')} className="w-[300px] my-[50px]" alt='' />

            <p className='font-bold text-[13px] text-[#00000063] mb-3'  >
                Actualmente no estas dado de alta como EDITOR
            </p>

            <FormControlLabel onChange={_ => setChecked(!checked)} control={<Checkbox />} label="Quiro ser EDITOR" />

            <input type='text' className='form-control py-6 !w-[400px] max-w-full my-[30px] bg-[#0000000]' placeholder='Alias' onChange={(e) => setAlias(e.target.value)} id='alias' />

            <Button type="submit" className="!text-[20px] !bg-[#cdfecc] !text-black !px-10 !capitalize" variant="contained">Confirmar</Button>

        </form>
    );
}
