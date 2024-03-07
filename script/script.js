const color = document.querySelectorAll('.main div');
        const corV = document.getElementById('verde');
        const corVm = document.getElementById('vermelho');
        const corA = document.getElementById('amarelo');
        const bnt = document.getElementById('bot');
        function ativa() {
            bnt.classList.add('ativo');
            verde();
            function vermelho() {
                if (corA.classList.contains('ativo')) {
                    corA.classList.remove('ativo');
                };
                if (corV.classList.contains('ativo')) {
                    corV.classList.remove('ativo');
                };
                corVm.classList.add('ativo');
                var ver = setTimeout(verde, 15000);
                if (!bnt.classList.contains('ativo')) {
                    clearTimeout(ver);
                };
            };
            function amarelo() {
                if (corVm.classList.contains('ativo')) {
                    corVm.classList.remove('ativo');
                };
                if (corV.classList.contains('ativo')) {
                    corV.classList.remove('ativo');
                };
                corA.classList.add('ativo');
                var verme = setTimeout(vermelho, 1000);
                if (!bnt.classList.contains('ativo')) {
                    clearTimeout(verme);
                };
            };
            function verde() {
                if (corA.classList.contains('ativo')) {
                    corA.classList.remove('ativo');
                };
                if (corVm.classList.contains('ativo')) {
                    corVm.classList.remove('ativo');
                };
                corV.classList.add('ativo');
                var amar = setTimeout(amarelo, 2000);
                if (!bnt.classList.contains('ativo')) {
                    clearTimeout(amar);
                };
            };
        };
        function desativa() {
            bnt.classList.remove('ativo')
            function amarela() {
                if (bnt.classList.contains('ativo')) {
                    clearInterval(vasco);
                };
                if (corVm.classList.contains('ativo')) {
                    corVm.classList.remove('ativo');
                };
                if (corV.classList.contains('ativo')) {
                    corV.classList.remove('ativo');
                };
                corA.classList.toggle('ativo');
            };
            const vasco = setInterval(amarela, 5000);
        };

          
