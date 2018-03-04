import MozartExample from '../../assets/mozart-sonate-kv-331-example.svg';

export default React => {
  class Infograph extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        elementClassName: ''
      };
  
      this.onClick.bind(this);
      this.onMouseOver.bind(this);
    }
    onMouseOver(event) {
      const target = event.target;
      const className = target
        .attributes.class ? event.target.attributes.class.value : '';

      if (className) {
        this.setState({
          elementClassName: className
        });
      }
    }

    onClick(event) {
      // Fetch element description from Wikipedia here
    }

    render() {
      return (
        <div>
          <h2>{ this.state.elementClassName }</h2>
          <MozartExample
            onClick={ this.onClick }
            onMouseOver={ this.onMouseOver.bind(this) } />
        </div>
      );
    }
  }

  return Infograph;
}
