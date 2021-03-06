var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var ReactCompactMultiselect = require('./src/react-compact-multiselect.js');

var DemoCompactMultiselect = createReactClass({
    options: [{value: 1, label: "South Park", network: "Comedy Central"},
          {value: 2, label: "All That", network: "Nickelodeon"},
          {value: 3, label: "Buffy", network: "WB"}, 
          {value: 4, label: "Charmed", network: "WB"},
          {value: 5, label: "Supernatural", network: "WB"},
          {value: 6, label: "Chappelle's show", network: "Comedy Central"},
          {value: 7, label: "The Daily Show", network: "Comedy Central"},
          {value: 8, label: "Sponge Bob", network: "Nickelodeon"},
          {value: 9, label: "Dora the Explorer", network: "Nickelodeon"},
          {value: 10, label: "Doug", network: "Nickelodeon"},
          {value: 11, label: "The Ren & Stimpy Show", network: "Nickelodeon"},
          {value: 12, label: "7th Heaven", network: "WB"}],

    info: {
      WB: "Teen Heartthrob Central",
      Nickelodeon: "All the kids shows you still watch",
      "Comedy Central": (<span title="Not actually the best">Best Channel</span>)
    },

    getInitialState: function() {
      return { selectedValues: [], filterValue: '' }
    },
    handleSelectionChange: function(newValueState) {
      this.setState({ selectedValues: newValueState });
    },
    handleFilterValueChange: function(value) {
      this.setState({ filterValue: value })
    },
    render: function() {
      return (
        <div>
          <div>Selected Values: {this.state.selectedValues.join(', ')}</div>
          <ReactCompactMultiselect 
            options={this.options}
            selectedValues={this.state.selectedValues}
            filterValue={this.state.filterValue}
            label={"Tv Shows"}
            groupBy={"network"}
            info={this.info}
            onSelectionChange={this.handleSelectionChange}
            onFilterValueChange={this.handleFilterValueChange}
            onClearFilter={() => this.setState({ filterValue: '' })}
            layoutMode={ReactCompactMultiselect.ALIGN_CONTENT_SE} />
        </div>
      )
    }
  });

ReactDOM.render(
      <DemoCompactMultiselect />
      , document.getElementById('main'));
