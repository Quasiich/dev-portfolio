import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import {json} from "@sveltejs/kit"

export async function POST({ request }) {
    const data = await request.json();
    console.log(data)

    return json({ emailSentSuccessfully: true })
}