import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddJewelry = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
            })
    }, []);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories);
            })
    }, []);

    const handleAddJewelry = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = parseInt(event.target.price.value);
        const photoURL = event.target.photo.value;
        const brand = event.target.brand.options[event.target.brand.selectedIndex].text;
        const category = event.target.category.options[event.target.category.selectedIndex].text;
        const description = event.target.description.value;
        const rating = parseInt(event.target.rating.value);
        const availability = event.target.availability.options[event.target.availability.selectedIndex].text;

        const productInfo = {
            name,
            price,
            photoURL,
            brand,
            category,
            description,
            rating,
            availability,
            views: 0,
            addedBy: user.email,
            dateAdded: Date.now()
        }

        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        })
        .then(res =>res.json())
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                timer: 2500
            });
            event.target.reset();
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again later!'
            })
        })
    }

    return (
        <form onSubmit={handleAddJewelry} className="flex flex-col gap-4 my-8 md:my-16 items-center justify-center">
            <h1 className="text-[20px] font-bold max-w-xl">Add Jewelry</h1>
            <div className="flex flex-col gap-4 w-full max-w-xl">
                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Name" type="text" name="name" id="name" />
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="price">Price</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Price" type="number" name="price" id="price" />
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="photo">Photo URL</label>
                    <input required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Photo URL" type="text" name="photo" id="photo" />
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="price">Brand</label>
                    <select required className="cursor-pointer border focus:outline-none text-[15px] px-4 py-2" id="brand" name="brand">
                        {
                            brands.map(brand => {
                                return (
                                    <option key={brand.value} value={brand.value}>{brand.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="category">Category</label>
                    <select required className="cursor-pointer border focus:outline-none text-[15px] px-4 py-2" id="category" name="category">
                        {
                            categories.map(cat => {
                                return (
                                    <option key={cat.value} value={cat.value}>{cat.title}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="description">Description</label>
                    <textarea required className="border focus:outline-none text-[15px] px-4 py-2" placeholder="Description" type="text" name="description" id="description"></textarea>
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="rating">Rating</label>
                    <input required min="0" max="5" step="0.1" placeholder="Rating from 0 - 5" className="border focus:outline-none text-[15px] px-4 py-2" type="number" name="rating" id="rating" />
                </div>

                <div className="text-[#595959] text-[16px] flex flex-col gap-1">
                    <label htmlFor="availability">Availability</label>
                    <select required className="cursor-pointer border focus:outline-none text-[15px] px-4 py-2" id="availability" name="availability">
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>

                <div>
                    <input type='submit' value='Add Jewelry' className="cursor-pointer w-full hover:opacity-80 transition-opacity duration-500 bg-[var(--primary-color)] px-5 py-3 uppercase text-white" />
                </div>

                <div>
                    <h1 className='text-center text-[16px] text-[#333333]'>See all of your products <Link to='/my-jewelry' className='text-[var(--primary-color)] hover:underline'>Here</Link></h1>
                </div>
            </div>
        </form>
    );
};

export default AddJewelry;