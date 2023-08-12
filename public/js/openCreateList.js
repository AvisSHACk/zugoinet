
const openCreateList = (button) => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const ContainerForm = document.createElement('div');
        ContainerForm.innerHTML = `
            <form class="Form Form--add-list">
                <h4>Nueva lista</h4>
                <input class="Form__input" placeholder="Nombre de la lista"/>
                <div class="Buttons">
                    <button class="Button Button--secondary">
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

        //Close model
    })
}

export default openCreateList;