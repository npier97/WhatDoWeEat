export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
};
