import React from 'react';


export default class PanelAdd extends React.Component {

  
    constructor(props) {
        super(props);
    }
    onChangeTitle = (e) => {
        this.setState({title:e.target.value})
    }
    onChangeImg = (e) => {
        this.setState({image:e.target.value})
    }
    onChangeRating = (e) => {
        this.setState({rating:e.target.value})
    }

    onSubmit = (e) => {
            const title = this.state.title;
            const img = this.state.image;
            const rating = this.state.rating;

            this.props.onadd({title : title, image : img , rating : rating});
            this.props.oncancel();

    }
        

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Título del libro</label><br />
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input"></input>
                        </p>
                        <p>
                            <label>Nombre de imagen</label><br />
                            <input type="text"  onChange={this.onChangeImg} name="image" className="input"></input>
                        </p>
                        <p>
                            <label>Calificacion</label><br />
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button   onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}
