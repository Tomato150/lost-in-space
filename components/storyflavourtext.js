// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CustomText from '../utils/customtext';


type Props = {
    current_story_node_text: string
}

export default function StoryText(props: Props) {
    const parseStoryTextStatement = (statement: string): string => {
        const {} = this.state;
        return "Dummy holder"
    };

    let {current_story_node_text} = props;
    let story_text_jsx = [],
        chunk: string,
        story_text_split = current_story_node_text.split("\n");

    if (story_text_split.length !== 1) {
        for (chunk of story_text_split) {
            let reg_search = /{(.*?)}/,
                reg_info = reg_search.exec(chunk);

            while (reg_info) {
                // TODO Test and implement in parseStoryTextStatement
                chunk.replace(reg_info[0], parseStoryTextStatement(reg_info[1]));
                reg_info = reg_search.exec(chunk);
            }

            story_text_jsx.push(<CustomText key={story_text_jsx.length}>{"    "}{chunk}</CustomText>);
        }
    } else {
        story_text_jsx.push(<CustomText key={story_text_jsx.length}>{"    "}{story_text_split}</CustomText>);
    }

    return story_text_jsx
}
