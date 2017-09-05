class Modal {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this._inputValue = '';
    }

    addInput(label, name, type) {
        let $input = 
        `<p>${this.message}</p>
        <label>${label}</label>
        <input name="${name}" type="${type}">`;

        $('.dialog').prepend($input);
        this.inputValue = $('input').text();
    }

    render() {
        $('body').append(this.$modal);
       $('body > button:contains("OK")').click(this.callback(this.inputValue));
       $('body > button:contains("Cancel")').click(function () {
           $('.overlay').empty();
       });
    }

    get inputValue() {
        return this._inputValue;
    }

    set inputValue(value) {
        this._inputValue = value;
    }

    get $modal() {
        return `<div class="overlay">
        <div class="dialog">
          
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>`;
    }
}