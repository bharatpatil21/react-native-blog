import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
	const { state, editBlogPost } = useContext(Context);
	const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

	const [title, setTitile] = useState(blogPost.title);
	const [content, setContent] = useState(blogPost.content);

	return(
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={(text) => setTitile(text)} />
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
			<Button title="Update Blog Post"
				onPress={() => {
					editBlogPost(blogPost.id, blogPost.title, blogPost.content, () => {
						navigation.navigate('Index')
					});
				}}
				/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5
	}
});

export default EditScreen;