import openai from "@/chatgptconfig"
export default async function handler(req, res) {

    try{
    const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages:[{role:"system",content:"You are a dentist"},{role:"user",content:req.query.text}]
});
    let data = response.data.choices[0].message.content
    res.status(200).json({msg:data})
}
    catch(e){
        res.send({msg:e})
    }
}