import React, { useState } from "react";

const Form = () =>{
    //Updating muptiplr values in one go with the help of useState Hook.
    const [formData,setFormData] = useState({firstName:"" ,
    middleName:"" ,
    lastName:"" ,
    streetaddress:"" ,
    country:"India" ,
    city:"",
    state:"",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:"" })

    /*This function is used for setting or updating the value of the form data. */
    function formDataHandler(event){
        /*Inside this data we have passed the even to check which input currently is working.
        
        From event.target we are trying to fetch few values*/
        const {name,type,value,checked} = event.target;

        /*At the end setting our form data ->
        where at starting we are accuring the prebious state(i.e maintaing the previous form
        data) */
        setFormData(prevformData => {
            /*Here maintained previous form data and now which value we have to update is choosen
            from the event.target.name(which we have to stored in name) now the name will get the
            value but before giving value we check if its checked type then a boolean value is placed
            otherwise simplt the value is passed into name.*/
            return {
                ...prevformData,
                [name]: (type === "checked") ? (checked) : (value)
            }
        });
    }

    /*This submit handler is called for Submit action of form.
    This will be called when we click on Submit button and this handler is made for Form. */
    function submitHandler(event){
        /*The default behaviour of submit button is to reset the data which we have 
        prevented. */
        event.preventDefault();

        /*Now here we can define any functionality for our submit button according to our choice.*/

        //Printing the Form Data in Console window
        console.log(formData);
    }

    function resetHandler(){
        return setFormData({firstName:"" ,
        middleName:"" ,
        lastName:"" ,
        streetaddress:"" ,
        country:"India" ,
        city:"",
        state:"",
        postalCode: "",
        comments: false,
        candidate: false,
        offers: false,
        pushNotification:"" });
    }

    return(
        <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
            
            <form onSubmit={submitHandler} onReset={resetHandler}>
                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='First name'>First name</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="text" name="firstName" id="First name" value={formData.firstName} onChange={formDataHandler} placeholder="Aman"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='Middle name'>Middle name</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 " type="text" name="middleName" id="Middle name" value={formData.middleName} onChange={formDataHandler} placeholder="Pratap"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='Last name'>Last name</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="text" name="lastName" id="Last name" value={formData.lastName} onChange={formDataHandler} placeholder="Singh"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='E-mail'>E-mail Address</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="email" name="email" id="E-mail" value={formData.email} onChange={formDataHandler} placeholder="amanpratapsingh@gmail.com"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='country'>Country</label>
                <br></br>
                <select className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" id="country" name="country" onChange={formDataHandler} value={formData.country}>
                    <option>India</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Russia</option>
                </select>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='street address'>Street Address</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="text" name="streetaddress" id="street address" value={formData.address} onChange={formDataHandler} placeholder="Street no.xyz HNo.xyz sector-abc"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='city'>City</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="text" name="city" id="city" value={formData.city} onChange={formDataHandler} placeholder="Chapra"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='State'>State/Provison</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="text" name="state" id="state" value={formData.state} onChange={formDataHandler} placeholder="Bihar"></input>
                <br></br><br></br>

                <label className="text-sm leading-6 font-medium text-gray-900" htmlFor='postalCode'>Zip/Postal Code</label>
                <br></br>
                <input className="outline mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400" type="number" name="postalCode" id="postalCode" value={formData.postalCode} onChange={formDataHandler} placeholder="841301"></input>
                <br></br><br></br>

                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                    <div className="flex">
                        <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={formDataHandler}/>
                        <div>
                            <label className="font-medium text-gray-900" htmlFor="comments">Comments</label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting</p>
                        </div>
                    </div>

                    <div className="flex">
                        <input type="checkbox" id="candidate" name="candidate" checked={formData.candidate} onChange={formDataHandler}/>
                        <div>
                            <label className="font-medium text-gray-900" htmlFor="candidate">candidate</label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting</p>
                        </div>
                    </div>

                    <div className="flex">
                        <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={formDataHandler} />
                        <div>
                            <label className="font-medium text-gray-900" htmlFor="offers">offers</label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting</p>
                        </div>
                    </div>
                </fieldset>

                <br></br><br></br>
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notification</legend>
                    <p className="text-gray-500">These are delivered via SMS to your mobile phone</p>

                    <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={formDataHandler} />
                    <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushEverything">Everything</label>
                    <br></br>

                    <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={formDataHandler} />
                    <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushEmail">Same as Email</label>
                    <br></br>

                    <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={formDataHandler} />
                    <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushNothing">No Push Notification</label>
                </fieldset>
                <br></br><br></br>

                <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Submit</button> &nbsp;&nbsp;
                <button type="reset" className="bg-blue-500 text-white font-bold rounded py-2 px-4">Reset</button>
                
            </form>
        </div>
    );
}

export default Form;