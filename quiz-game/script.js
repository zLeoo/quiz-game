
var i = 0

var j = 0

var pontuacao = 0

function mudaConteudo(){


	document.getElementById('resposta-1').className = 'option'
	document.getElementById('resposta-2').className = 'option'
	document.getElementById('resposta-3').className = 'option'
	document.getElementById('resposta-4').className = 'option'
	
	var perguntas = []


	perguntas[0] = 'HTML é uma linguagem de...'
	perguntas[1] = 'O acrônimo HTML vem do inglês e significa...'
    perguntas[2] = 'Para criar um titulo grande em HTML devemos usar...'
    perguntas[3] = 'A tag para criação de imagens é... '
    perguntas[4] = 'Para criarmos um botão usando HTML usamos...'
    perguntas[5] = 'Para selecionarmos um parágrafo via CSS utilizamos...'
    perguntas[6] = 'Quais desses codigos representam pseudo-classes'
    perguntas[7] = 'Uma Media Query nos permite...'
    perguntas[8] = 'Para selecionar um elemento apartir do id via JavaScript usamos...'
    perguntas[9] = 'Para acessar o texto dentro de uma tag usamos...'	    
    perguntas[10] = ''	

    var pergunta = document.getElementById('pergunta').innerHTML = perguntas[i]


    var respostas = []

    respostas[0] = ['Marcação','Estilização','Programação','Demarcação']
    respostas[1] = ['Hypertext Markup Language','Hyper Translate Master Language','Hypertest Markup Langague','Hyper Technical Make Language']
    respostas[2] = ['<xmp><title><title></xmp>','<xmp><title class="large"><title></xmp>','<xmp><h6></h6></xmp>','<xmp><h1></h1></xmp>']
    respostas[3] = ['<xmp><images><images></xmp>','<xmp><img src=""></xmp>','<xmp><image></image></xmp>','<xmp><imagem></imagem></xmp>']
    respostas[4] = ['<xmp><button></button></xmp>','<xmp><btn></btn></xmp>','<xmp><input></input></xmp>','<xmp><canvas></canvas></xmp>']
    respostas[5] = ['p{}','.p{}','#p{}','$p{}']
    respostas[6] = ['<xmp><div><div></xmp>','background-color',':hover','Nenhuma das Alternativas']
    respostas[7] = ['Criar elementos HTML','Criar classes e funções','Criar um banco de dados','Fazer consultas']
    respostas[8] = ['document.getElementById()','document.getElementsByName()','window.getElementById()','Nenhuma das Alternativas']
	respostas[9] = ['document.getElementsByTagName()','document.getElementById.innerHTML()','window.location.TagName','document.getHTML()']  
	respostas[10] = ['','','','']     

	console.log(i)
	var resposta1 = document.getElementById('resposta-1').innerHTML = respostas[i][0]
	var resposta2 = document.getElementById('resposta-2').innerHTML = respostas[i][1]
	var resposta3 = document.getElementById('resposta-3').innerHTML = respostas[i][2]
	var resposta4 = document.getElementById('resposta-4').innerHTML = respostas[i][3]
	
	//console.log(pergunta, resposta1,resposta2,resposta3,resposta4)
	
	
	i += 1

	if (i > 10) {
		document.getElementById('pergunta').className = 'text-center'
		var level = ''

		if (pontuacao >= 0 && pontuacao <= 4) {
			level = 'Portanto você ainda é iniciante em front-end'
		}
		if (pontuacao >= 5 && pontuacao <= 8) {
			level = 'Portanto você é intermediário em front-end'
		}
		if (pontuacao >= 9 && pontuacao <= 10) {
			level = 'Portanto você é avançado em front-end'
		}


		document.getElementById('pergunta').innerHTML = 'Você acertou ' + pontuacao.toString() + ' de 10. ' + level.toString()
		document.getElementById('pergunta').className = 'mb-5'
		resposta1 = document.getElementById('resposta-1').remove() 
		resposta2 = document.getElementById('resposta-2').remove()
		resposta3 = document.getElementById('resposta-3').remove()
		resposta4 = document.getElementById('resposta-4').remove()
		
		var group = document.getElementById('group')
		var div = document.createElement('div')
		group.appendChild(div)
		div.setAttribute('class','option')
		div.setAttribute('onclick','window.location.reload()')
		div.innerHTML = 'Reiniciar Quiz'
		}
	}



function validarResposta(escolha){

	var escolha_correta = ''

	
	//pergunta 1


	if (i == 1) {
		var escolha_correta = 'Marcação'
		
		if (escolha_correta === 'Marcação' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
			
			
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 2


	if (i == 2) {
		var escolha_correta = 'Hypertext Markup Language'

		if (escolha_correta === 'Hypertext Markup Language' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)




			

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 3 


	if (i == 3) {
		escolha_correta = '<h1></h1>'

		if (escolha_correta === '<h1></h1>' && escolha === 'd') {
			console.log('Resposta correta')
			document.getElementById('resposta-4').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}
	

	//pergunta 4

	if (i == 4) {
		escolha_correta = '<img src="">'

		if (escolha_correta === '<img src="">' && escolha === 'b') {
			console.log('Resposta correta')
			document.getElementById('resposta-2').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 5


	if (i == 5) {
		escolha_correta = '<button></button>'

		if (escolha_correta === '<button></button>' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 6

	if (i == 6) {
		escolha_correta = 'p{}'

		if (escolha_correta === 'p{}' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 7


	if (i == 7) {
		escolha_correta = ':hover'

		if (escolha_correta === ':hover' && escolha === 'c') {
			console.log('Resposta correta')
			document.getElementById('resposta-3').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)

			
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 8 


	if (i == 8) {
		escolha_correta = 'Fazer consultas'

		if (escolha_correta === 'Fazer consultas' && escolha === 'd') {
			console.log('Resposta correta')
			document.getElementById('resposta-4').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)			

		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//pergunta 9


	if (i == 9) {
		escolha_correta = 'document.getElementById()'

		if (escolha_correta === 'document.getElementById()' && escolha === 'a') {
			console.log('Resposta correta')
			document.getElementById('resposta-1').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)	
		}else {
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'b') {
				document.getElementById('resposta-2').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	}


	//perguntas 10


	if (i == 10) {
		escolha_correta = 'document.getElementById.innerHTML()'

		if (escolha_correta === 'document.getElementById.innerHTML()' && escolha === 'b') {
			console.log('Resposta correta')
			document.getElementById('resposta-2').className = 'option-correta'
			pontuacao += 1
			setTimeout(mudaConteudo,800)

		}else {	
			console.log('Resposta Incorreta')
			console.log(escolha)
			if (escolha === 'a') {
				document.getElementById('resposta-1').className = 'option-incorreta'
			}
			if (escolha === 'c') {
				document.getElementById('resposta-3').className = 'option-incorreta'
			}
			if (escolha === 'd') {
				document.getElementById('resposta-4').className = 'option-incorreta'
			}

			setTimeout(mudaConteudo,800)
		
		}

	console.log(`escolha do player:${escolha},escolha correta:${escolha_correta},questao atual:${i}`)	
	} 































}






















function validar(){

	var nome = document.getElementById('nome').value

	var email = document.getElementById('email').value

	console.log(`nome:${nome} email:${email}`)

	if (nome === '' || email === '' || email.indexOf('@') == -1 || email.indexOf('.com') == -1 ) {
		
		document.getElementById("cabecalho").className = 'modal header text-warning'
		document.getElementById('corpo').innerHTML = 'Dados invalidos'

		$('#modal').modal("show")
	}else {
		window.location.href = 'quiz/teste-jogos.html'
	}


}



















