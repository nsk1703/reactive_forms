import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

    // Ceci est notre propre validateur qui permettrait a faire sur une donnee
    // bien precise, remplie par l'utilisateur dans le ou les champs où il sera
    // appliqué
    static invalidProjectName(control: FormControl): {[s: string]: boolean} {

        if(control.value === 'Test'){
            return {'invalidProjectName': true }
        }
           return null;
        
    }

    // Validateur asynchrone devant atteindre la base de donées ou mouvement exterieur
    //  pour effectuer la validation
    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any>(){

        const promise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(control.value === 'TestProject'){
                    resolve({'invalidProjectName': true})
                }else{
                    resolve(null);  
                }
            }, 2000)
        })
    }
}