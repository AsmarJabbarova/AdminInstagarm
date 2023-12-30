// import axios from "axios";

// export const handleDelete = async (id) => {
//   await axios.delete(`http://localhost:6060/users${id}`);
// };
import axios from "axios";

export const handleDelete = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:6060/users/${id}`);
  } catch (error) {
    console.error("Error deleting user: ", error);
    // İsterseniz hata durumunda farklı bir işlem yapabilirsiniz.
    // Örneğin, bir hata durumunda belirli bir mesajı gösterebilir veya loglayabilirsiniz.
  }
};
