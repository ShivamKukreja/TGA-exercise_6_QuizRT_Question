var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var Navigaton = require('./navigation/index');


class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <Navigaton data={this.props.nav}></Navigaton>

                <div className ="container">
                    <h1>On question attempt</h1>
                    <form id="questionAttempt">
                        <div className="form-group">
                            <label>Question Id</label>
                            <input type="text"
                                   defaultValue="5a689cc0cafc97d12fa0cf34"
                                   className="form-control" name="_id"/>
                        </div>
                        <div className="form-group">
                            <label>Time taken to answer</label>
                            <input type="text"
                                   defaultValue="10"
                                   className="form-control" name="timeTaken" />
                        </div>

                        <div className="form-group">
                            <label>Is answer correct</label>
                            <input type="text"
                                   defaultValue="true"
                                   className="form-control" name="correctness" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Fire</button>
                        </div>

                    </form>
                </div>


            </DefaultLayout>
        );
    }
}

module.exports = indexPage;

