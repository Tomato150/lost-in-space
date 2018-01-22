import React, {Component} from 'react';
import CustomText from '../../utils/custom-text';


export default class StoryText extends Component {
    parseStoryTextStatement(statement) {
        const {} = this.state;
        return "Dummy holder"
    }

    render() {
        let {current_story_node_text} = this.props;
        let story_text_jsx = [],
            chunk,
            story_text_split = current_story_node_text.split("\n");

        if (story_text_split.length !== 1) {
            for (chunk of story_text_split) {
                let reg_search = /{(.*?)}/,
                    reg_info = reg_search.exec(chunk);

                while (reg_info) {
                    // TODO Test and implement in parseStoryTextStatement
                    chunk.replace(reg_info[0], this.parseStoryTextStatement(reg_info[1]));
                    reg_info = reg_search.exec(chunk);
                }

                story_text_jsx.push(<CustomText key={story_text_jsx.length}>{"    "}{chunk}</CustomText>);
            }
        } else {
            story_text_jsx.push(<CustomText key={story_text_jsx.length}>{"    "}{story_text_split}</CustomText>);
        }

        return story_text_jsx
    }
}
