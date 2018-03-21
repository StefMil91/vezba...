var users = ['Milenko','Ana','Ana', 'Grozdomir', 'Stefan', 'Stefan', 'Jovana', 'Jelena', 'Ana', 'Ana', 'Stefan', 'Milutin', 'Dragutin'
			 ,'Dragutin', 'Jelena', 'Jovana','Grozdomir','Milenko'];
var arr = [];
var brojac = 0;
var test = 0;
var a = 0;

function check(){
	for(b = 0; b < users.length; b++){
		if(users[a] == users[b]){
			brojac++;
			arr[a] = users[a];
		}
	}
	for(i = 0; i < arr.length; i++){
		if(users[a] == arr[i]){
			test++;
		}
	}
}

function display(){
	if(test <= 1){
		console.log(users[a]+ ': ' + brojac);
	}
	test = 0;
	brojac = 0;
	a++;
}

for(call = 0; call < users.length; call++){
	check();
	display();
}
