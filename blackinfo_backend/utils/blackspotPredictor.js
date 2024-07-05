const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: ''
});
const a = {
    type: "Head on collision",
    vehicals: 2,
    casualties: 1,
    property_damage: "Yes"
}
exports.blackSpotPredicter = async (accident) => {
    
    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system",
            content: `You work is to predict if a location is a blackspot or grayspot or not,
                  you will take inputs like Type of locations, accidents that happend near it thier severity and data , it will be in json format.
                  you anly have to say blackspot if it is a blackspot and same for grayspot and none .
                  do not take any other input.`
                },
                {
                    role: "user",
                    content: `Type of Accident:${accident.type}.
                    Number of Vehicles Involved: ${accident.vehicals}.
                    Number of Casualties: ${accident.casualties}.
                    Property Damage: ${accident.property_damage}.`,       
                }],
        model: "gpt-3.5-turbo",
    });
    let GPT3Answer =await completion.choices[0].message.content
    console.log(GPT3Answer);
    return GPT3Answer;
}
