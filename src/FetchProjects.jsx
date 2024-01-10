import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
	space: "h0jjqxo0cvht",
	environment: "master",
	accessToken: import.meta.env.VITE_ACCESS_KEY,
});

export const useFetchProjects = () => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getProjects = async () => {
		try {
			const response = await client.getEntries({ content_type: "projects" });
			const projects = response.items.map((item) => {
				const { title, url, image } = item.fields;
				const id = item?.sys?.id;
				const projectImg = image?.fields?.file?.url;
				return { title, url, id, projectImg };
			});
			setProjects(projects);
			setIsLoading(false);
		} catch (error) {
			console.log(error.response);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		getProjects();
	});
	return { isLoading, projects };
};
