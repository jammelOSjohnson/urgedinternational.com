import { ChangeEventHandler } from "react";
import BackupIcon from '@material-ui/icons/Backup';

interface props {
    name: string,
    placeholder: string, 
    onChange: ChangeEventHandler<HTMLInputElement>, 
    value, 
    type: string, 
    required: string
}
export const Field: React.FC<props> = function Field({name, placeholder, onChange, value, type, required}){
    if(required === "required"){
        if(type === "file"){
            return (
                <>
                    <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className="inputfile" />
                    <label htmlFor={name}>
                        <BackupIcon style={{marginRight: "6%"}} />
                        Upload Invoice
                    </label>
                    <p style={{color: "red", fontWeight: "bold"}}> Only Pdf, Png, Jpg/Jpeg and Svg files are allowed.</p>
                </>
            );
        }else{
            return (
                <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className="form-control"  required />
            );
        }
        
    }else{
        if(type === "file"){
            return (
                <>
                    <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChange} value={value} className="inputfile" />
                    <label htmlFor={name}>
                        <BackupIcon style={{marginRight: "6%"}} />
                        Upload Invoice
                    </label>
                    <p style={{color: "red", fontWeight: "bold"}}> Only Pdf, Png, Jpg/Jpeg and Svg files are allowed.</p>
                </>
            );
        }else{
            return (
                <> 
                    <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className="form-control"/>
                </>
            )
        }
    }
};