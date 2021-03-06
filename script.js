function Enviado()
{
  alert("Seu Formulario foi enviado com sucesso!");
}

/* Transforma o num do CPF para o formato: XXX.XXX.XXX-XX */
function formataCPF(cpf) {
  const elementoAlvo = cpf
  const cpfAtual = cpf.value   
  
  let cpfAtualizado;
  
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
   function( regex, argumento1, argumento2, argumento3, argumento4 ) {
          return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
  })  
  elementoAlvo.value = cpfAtualizado; 
 }

/* Transforma o num do celular para o formato: (XX)XXXXX-XXXX */  
function formataCEL(cel) {
    const elementoAlvo = cel
    const celAtual = cel.value   
    
    let celAtualizado;
    
    celAtualizado = celAtual.replace(/(\d{2})(\d{5})(\d{4})/, 
     function( regex, argumento1, argumento2, argumento3 ) {
            return '(' + argumento1 + ')' + ' ' + argumento2 + '-' + argumento3;
    })  
    elementoAlvo.value = celAtualizado; 
 }

/* Transforma o num do CPF para o formato: XXX.XXX.XXX-XX */
function formataTEL(tel) {
      const elementoAlvo = tel
      const telAtual = tel.value   
      
      let telAtualizado;
      
      telAtualizado = telAtual.replace(/(\d{2})(\d{4})(\d{4})/, 
       function( regex, argumento1, argumento2, argumento3 ) {
              return '(' + argumento1 + ')' + ' ' + argumento2 + '-' + argumento3;
      })  
      elementoAlvo.value = telAtualizado; 
 }

/* Transforma o num do CEP para o formato: XXXXX-XXX */ 
function formataCEP(cep) {
        const elementoAlvo = cep
        const cepAtual = cep.value   
      
        let cepAtualizado;
      
        cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/, 
        function( regex, argumento1, argumento2 ) {
              return  argumento1  + '-' + argumento2  ;
      })  
      elementoAlvo.value = cepAtualizado; 
}

  
