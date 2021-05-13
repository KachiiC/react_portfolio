const FirstComponent = (
    <div className="w-50 modal-example-component">
        <img src={"https://via.placeholder.com/300x300/0000/FFFFFF?text=I%20am%20the%20first%20modal"} 
            alt="component_2"
            className="site-responsive-image"
        />
    </div>
)

const FirstContent = (
    <div className="text-center">
        <h1>First Modal Title</h1>
        <p>First modal content</p>
    </div>
)

const SecondComponent = (
    <div className="w-50 modal-example-component">
        <img src={"https://via.placeholder.com/300x300/FFFFFF/0000?text=I%20am%20the%20second%20modal"} 
            alt="component_1"
            className="site-responsive-image"
        />
    </div>
)

const SecondContent = (
    <div className="text-center">
        <h1>Second Modal Title</h1>
        <p>Second modal content</p>
    </div>
)


const ModalData = [
    {
        component: FirstComponent,
        content: FirstContent
    },
    {
        component: SecondComponent,
        content: SecondContent
    }
]

export default ModalData
