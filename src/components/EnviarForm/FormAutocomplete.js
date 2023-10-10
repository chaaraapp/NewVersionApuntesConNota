import { Autocomplete, TextField } from "@mui/material";

export default function FormAutocomplete({label, list, inputName, handleInputChange, setValue, error, span}) {
    return(
        <div className={"col-span-"+span}>
            <Autocomplete
                disablePortal
                freeSolo
                options={list}
                getOptionLabel={(option) => option.nombre}
                onChange={(e, value) => { handleInputChange(value, inputName, setValue) }}
                renderInput={(params) => (
                    <TextField
                        error={error?.length ? true : false}
                        {...params}
                        label={label}
                    />
                )}
            />
        </div>
    )
}