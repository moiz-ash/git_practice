const messages = ['I ate a clock yesterday, it was very time-consuming',
'A perfectionist walked into a bar...apparently, the bar wasn’t set high enough.',
'A fire hydrant has H-2-O on the inside and K-9-P on the outside.',
'Did you hear about the crook who stole a calendar? He got twelve months.',
'Q. Whats the difference between ignorance and apathy? A. I don’t know and I don’t care.',
'I own the worlds worst thesaurus. Not only is it awful, its awful.',
'I woke up this morning and forgot which side the sun rises from, then it dawned on me.',
'Dont you hate it when someone answers their own questions? I do.'];


const generateMessage = () => {
    console.log(messages[(Math.floor(Math.random()*messages.length))])
} 
generateMessage();