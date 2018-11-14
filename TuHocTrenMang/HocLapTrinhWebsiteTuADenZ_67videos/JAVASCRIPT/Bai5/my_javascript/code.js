var bien = 10;

switch(bien){
	case 1:{
		bien+=10;
		// không có break;
	}
	case 10: {
		bien += 20;
		break;
	}
	default: {
		bien += 30;
		break;
	}
}

alert(bien);