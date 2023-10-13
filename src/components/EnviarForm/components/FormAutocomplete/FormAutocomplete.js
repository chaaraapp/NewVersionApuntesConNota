import { Autocomplete, TextField } from "@mui/material";

export default function FormAutocomplete({ label, value, list, inputName, handleInputChange, setValue, error, span }) {
    console.log(list, value, inputName);
    return (
        <div className={"col-span-" + span}>
            <Autocomplete disablePortal freeSolo value={value} options={Array.isArray(list) ? list : []} getOptionLabel={(option) => option?.nombre}

                onChange={(e, value) => { handleInputChange(value, inputName, setValue) }}
                renderInput={(params) => (
                    <TextField error={error?.length ? true : false}   {...params} label={label} />
                )}
            />
        </div>
    )
}