const openCreateList = (button) => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const ContainerForm = document.createElement('div');
        ContainerForm.innerHTML = `
            <form class="Form Form--add-list">
                <h4>Nueva lista</h4>
                <input class="Form__input" placeholder="Nombre de la lista"/>
                <div class="Form__containerButtons Form__containerButtons--addlist">
                    <button class="Button Button--secondary" id="cancelar-lista">
                        <span class="material-icons-sharp">
                            close
                        </span>                    
                        CANCELAR
                    </button>
                    <button class="Button Button--principal">
                        <span class="material-icons-sharp">
                            done
                        </span>
                        CREAR LISTA
                    </button>
                </div>
            </form>
        `;

        ContainerForm.classList.add("Shadow")
        document.body.style.overflow = "hidden";
        document.body.appendChild(ContainerForm);

        document.querySelector('#cancelar-lista').addEventListener('click', () => {
            document.body.style.overflow = "hidden";
            ContainerForm.remove();
        });

        //Close model
    })
}

export default openCreateList;