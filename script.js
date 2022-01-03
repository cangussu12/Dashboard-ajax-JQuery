$(document).ready(() => {
	
    $('#documentacao').on('click', () => {
       /*
        $('#pagina').load('documentacao.html')

       $.get('documentacao.html', data => { 
           $('#pagina').html(data)
       })
        */
       $.post('documentacao.html', data => { 
        $('#pagina').html(data)
        })
        
    })

    $('#suporte').on('click', () => {
        /*
        $('#pagina').load('suporte.html')

        $.get('suporte.html', data => { 
            $('#pagina').html(data)
        })
        */
        $.post('suporte.html', data => { 
            $('#pagina').html(data)
        })
    })

    //ajax
    $('#competencia').on('change', e => {

      let competencia = $(e.target).val()
      
       $.ajax({
           type: 'GET',
           url: 'app.php',
           data: `competencia=${competencia}`,
           dataType: 'json',
           success: dados => {
               $('#numeroVendas').html(dados.numeroVendas)
               $('#totalVendas').html(dados.totalVendas)
               $('#ativos').html(dados.ativos)
               $('#inativos').html(dados.inativos)
               $('#reclamacoes').html(dados.reclamacoes)
               $('#elogios').html(dados.elogios)
               $('#sugestoes').html(dados.sugestoes)
               $('#totalDespesas').html(dados.totalDespesas)
            },
           error: erro => {console.log(erro)}
       })
    })
})