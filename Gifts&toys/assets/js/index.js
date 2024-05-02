        const modal_empresa = document.getElementById("js-modal-empresa");
        document.getElementById("js-open-empresa").addEventListener("click", () => {
            modal_empresa.classList.add("show");
        });
        document.getElementById("js-close-empresa").addEventListener("click", () => {
            modal_empresa.classList.remove("show");
        });

        const modal_produtos = document.getElementById("js-modal-produtos");
        document.getElementById("js-open-produtos").addEventListener("click", () => {
            modal_produtos.classList.add("show");
        });
        document.getElementById("js-close-produtos").addEventListener("click", () => {
            modal_produtos.classList.remove("show");
        });


        const modal_contact = document.getElementById("js-modal-contact");
        document.getElementById("js-open-contact").addEventListener("click", () => {
            modal_contact.classList.add("show");
        });
        document.getElementById("js-close-contact").addEventListener("click", () => {
            modal_contact.classList.remove("show");
        });

        const modal_faleconosco = document.getElementById("js-modal-faleconosco");
        document.getElementById("js-open-faleconosco").addEventListener("click", () => {
            modal_faleconosco.classList.add("show");
        });
        document.getElementById("js-close-faleconosco").addEventListener("click", () => {
            modal_faleconosco.classList.remove("show");
        });

        var form = document.getElementsByTagName('form')[0];
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log($(form).serializeArray());

            alert("Obrigado, em alguns horas estaremos entrando em contato.");
            form.reset();
            document.getElementById("js-close-faleconosco").click();
        });