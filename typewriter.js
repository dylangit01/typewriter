const sentence = 'hello there from lighthouse labs';
let timer = 0;
for (const i in sentence) {
	timer += 50;
	setTimeout(() => { process.stdout.write(sentence[i]); }, timer);
}
setTimeout(()=> process.stdout.write('\n'), timer)