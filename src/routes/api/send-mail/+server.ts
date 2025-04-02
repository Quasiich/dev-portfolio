import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import {json} from "@sveltejs/kit"

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST({ request }) {
    const {contactMail, contactName, contactInformation} = 
        await request.json();

        if(!contactMail || !contactName || !contactInformation) {
            return json({message: "could not send email. Missing data."}, {status: 400})
        }

    const message = {
        to: "erikrettschlag@icloud.com",
        from: "erikrettschlag@icloud.com",
        subject: "contact form on your portfolio",
        html: `Somebody used the contact form <br/>
        Name: ${contactName},
        Email: ${contactMail},
        Information: ${contactInformation}`,
    };

    try {
        await sgMail.send(message);
        return json({emailSentSuccessfully: true})
    } catch(err) {
        console.log(err)
        return json({err}, {status: 500})
    }
}