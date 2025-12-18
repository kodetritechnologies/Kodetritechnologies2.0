import { useEffect, useState } from "react";
import JoditTextEditor from "../../../components/textEditor/JoditTextEditor";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import BasicProvider from "../../../authentications/BasicProvider";
import JsTreeCheckbox from "../../../components/JsTreeCheckbox";
import MultiSelectDropdown from "../../../components/MultiSelectDropdown";
import SingleSelectDropdown from "../../../components/SingleSelectDropdown";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import handleSubmitHelper from "../../../helpers/handleSubmitHelper";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { YYYYMMDD } from "../../../helpers/dateHelper";
import VarientFileUploadModule from "../../../components/modules/VarientFileUploadModule";

function Create() {
  const basicProvider = BasicProvider();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);

  const [categories, setCategories] = useState([]);
  const [defaultCategories, setDefaultCategories] = useState([]);

  const validation = [
    {
      key: "name",
      required: true,
      maxLength: 3,
    },
  ];
  const [initialValues, setInitialValues] = useState({
    name: "",
    slug: "",
    short_content: "",
    long_content: "",
    varients: [
      {
        gallery: [],
        name: "",
        value: "",
        price: "",
        sale_price: "",
        discount: "",
        quantity: "unlimited",
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: "",
        },
      },
    ],
    price: "",
    sale_price: "",
    discount: "",
    quantity: "unlimited",
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    faqs: {
      _id: "",
      values: [
        {
          ques: "",
          ans: "",
        },
      ],
    },
    brand: {},
    tages: [],
    categories: [],
    featured_image: "",
    gallery: [],
    publish: "",
    featured: false,
    hot: false,
    type: "simple",
  });

  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState(null);

  const [error, setError] = useState({});

  const handleChange = (e, index = null) => {
    const { type, name, value, checked } = e.target;

    if (index !== null) {
      setInitialValues((pre) => {
        const updatedVarients = [...pre.varients];
        updatedVarients[index] = {
          ...updatedVarients[index],
          [name]: type === "checkbox" ? checked : value,
          dimensions: {
            ...updatedVarients[index].dimensions,
            [name]: ["length", "width", "height"].includes(name)
              ? value
              : updatedVarients[index].dimensions[name],
          },
        };
        return { ...pre, varients: updatedVarients };
      });
    } else {
      setInitialValues((pre) => ({
        ...pre,
        [name]: type === "checkbox" ? checked : value,
        dimensions: {
          ...pre.dimensions,
          [name]: ["length", "width", "height"].includes(name)
            ? value
            : pre.dimensions[name],
        },
      }));
    }
  };

  const handleDeleteVarient = (index) => {
    setInitialValues((pre) => {
      const updated = pre.varients.filter((_, i) => i !== index);
      return { ...pre, varients: updated };
    });
  };

  const handleAddVarients = () => {
    setInitialValues((pre) => ({
      ...pre,
      varients: [
        ...pre.varients,
        {
          gallery: [],
          name: "",
          value: "",
          price: "",
          sale_price: "",
          discount: "",
          quantity: "unlimited",
          weight: "",
          dimensions: {
            length: "",
            width: "",
            height: "",
          },
          manufacturing_date: "",
          expire_date: "",
        },
      ],
    }));
  };

  const fetchCategory = async () => {
    const response = await basicProvider.getMethod(
      "configuration/categories/byType/item"
    );
    setCategories(response?.data || []);
  };

  const handleAddFAQ = () => {
    setInitialValues((prev) => ({
      ...prev,
      faqs: {
        ...prev?.faqs,
        values: [...(prev?.faqs?.values || []), { ques: "", ans: "" }],
      },
    }));
  };

  const handleFAQChange = (index, field, value) => {
    setInitialValues((prev) => {
      const updatedValues = [...prev.faqs.values];
      updatedValues[index][field] = value;
      return {
        ...prev,
        faqs: {
          ...prev.faqs,
          values: updatedValues,
        },
      };
    });
  };

  const handleRemoveFAQ = (index) => {
    setInitialValues((prev) => {
      const updatedValues = prev.faqs.values.filter((_, i) => i !== index);
      return {
        ...prev,
        faqs: {
          ...prev.faqs,
          values: updatedValues,
        },
      };
    });
  };

  const handleCancle = () => {
    setInitialValues({
      name: "",
      slug: "",
      short_content: "",
      long_content: "",
      varients: [
        {
          gallery: [],
          name: "",
          value: "",
          price: "",
          sale_price: "",
          discount: "",
          quantity: "",
          weight: "",
          dimensions: {
            length: "",
            width: "",
            height: "",
          },
        },
      ],
      price: "",
      sale_price: "",
      discount: "",
      quantity: "",
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      faqs: [
        {
          ques: "",
          ans: "",
        },
      ],
      brand: "",
      tages: [],
      categories: [],
      featured_image: "",
      gallery: [],
      publish: "",
      featured: false,
      hot: false,
      type: "simple",
    });
  };

  const handleSubmit = async () => {
    const data = handleSubmitHelper(initialValues, validation, setError);
    let response = null;
    if (data) {
      if (id) {
        response = await basicProvider.patchMethod(
          `ecommerce/item/update/${id}`,
          data
        );
        if (response.status === "success") {
          fetchData();
        }
        fetchData();
      } else {
        response = await basicProvider.postMethod(
          "ecommerce/item/create",
          data
        );
        if (response.status === "success") {
          navigate(`/ecommerce/item/${response?.data?._id}/edit`);
        }
      }

      if (response.status === "success") {
        toast.success(response?.message);
      } else {
        toast.error(response.message);
      }
    }
  };

  const handleFileUploads = async (file) => {
    const formData = new FormData();
    formData.append("featured_image", file);
    let response = await basicProvider.postMethod("cms/files/create", formData);
    if (response.status === "success") {
      setInitialValues((pre) => ({
        ...pre,
        featured_image: response?.data?.featured_image?._id,
      }));
    }
  };

  const handleGalleryUploads = async (file) => {
    const formData = new FormData();
    file?.map((newfile) => {
      return formData.append("gallery", newfile?.file);
    });

    let response = await basicProvider.postMethod("cms/files/create", formData);
    if (response.status === "success") {
      const galleryFile = response?.data?.gallery?.map((file) => {
        return file?._id;
      });

      if (galleryFile) {
        setInitialValues((pre) => ({
          ...pre,
          gallery: galleryFile,
        }));
      }
    }
  };

  const handleVariantGalleryUpload = async (files, index) => {
    const formData = new FormData();
    files?.forEach((file) => {
      formData.append("gallery", file?.file);
    });

    const response = await basicProvider.postMethod(
      "cms/files/create",
      formData
    );

    if (response.status === "success") {
      const uploadedGalleryIds = response?.data?.gallery?.map((f) => f?._id);

      setInitialValues((prev) => {
        const updatedVariants = [...prev.varients];
        updatedVariants[index].gallery = [
          ...(updatedVariants[index].gallery || []),
          ...uploadedGalleryIds,
        ];
        return { ...prev, varients: updatedVariants };
      });

      toast.success("Variant gallery uploaded!");
      setShowGalleryModal(false);
    } else {
      toast.error("Failed to upload variant gallery");
    }
  };

  async function fetchData() {
    const response = await basicProvider.getMethod(`ecommerce/item/by/${id}`);
    if (response.status === "success") {
      const Tages = response?.data?.tages?.map((tag) => {
        return {
          label: tag?.name,
          value: tag?._id,
        };
      });

      setDefaultCategories(response?.data?.categories);

      setInitialValues((pre) => ({
        ...pre,
        ...response.data,
        featured_image: response?.data?.featured_image?._id,
        brand: {
          label: response?.data?.brand?.name,
          value: response?.data?.brand?._id,
        },
        tages: Tages,
        publish: YYYYMMDD(response?.data?.publish),
      }));
      setImage(response?.data?.featured_image);
      setGallery(response?.data?.gallery);
    }
  }

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(initialValues);

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Product"}>
            <div className="content">
              <div className="itemInput flex flex-col">
                <label htmlFor="name" className="label">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`input ${error.name && "customeErrorInput"}`}
                  value={initialValues?.name}
                  placeholder="Enter Product Name"
                  onChange={handleChange}
                />
                {error?.name && (
                  <span className="customeErrorMessage">{error.name}</span>
                )}
              </div>
              <div className="shortDescription">
                <label htmlFor="shortDes" className="title">
                  Short Description <span className="text-red-600">*</span>
                </label>
                <JoditTextEditor
                  initialValues={initialValues?.short_content}
                  setInitialValues={(value) => {
                    setInitialValues((pre) => ({
                      ...pre,
                      short_content: value,
                    }));
                  }}
                />
              </div>
              <div className="longDescription">
                <label htmlFor="shortDes" className="title">
                  Long Description <span className="text-red-600">*</span>
                </label>
                <JoditTextEditor
                  initialValues={initialValues?.long_content}
                  setInitialValues={(value) => {
                    setInitialValues((pre) => ({
                      ...pre,
                      long_content: value,
                    }));
                  }}
                />
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp
            title={"Variants"}
            showSwitch={true}
            status={initialValues?.type === "simple" ? false : true}
            getStatus={(status) => {
              setInitialValues((pre) => ({
                ...pre,
                type: status ? "variants" : "simple",
              }));
            }}
          >
            <div className="cp varients-table">
              <table>
                <tr>
                  <th>Image</th>
                  <th>Varient Name</th>
                  <th>Varient value</th>
                  <th style={{ padding: "0px 5rem" }}>Price</th>
                  <th>Sale Price</th>
                  <th>Discount</th>
                  <th style={{ padding: "0px 3rem" }}>Quantity</th>
                  <th style={{ padding: "0px 2rem" }}>Weight</th>
                  <th style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
                    Dimensions
                  </th>
                  <th>Manufacturing Date</th>
                  <th>Expiry Date</th>
                </tr>
                {initialValues?.varients?.map((varient, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedVariantIndex(index);
                            setShowGalleryModal(true);
                          }}
                          className="flex flex-col items-center text-blue-600 hover:text-blue-800"
                        >
                          <img src="/no-photos.png" width={50} />
                          <span>Upload</span>
                        </button>
                      </div>
                      <div className="text-center">
                        ({varient?.gallery?.length})
                      </div>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={varient?.name}
                        onChange={(e) => handleChange(e, index)}
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        name="value"
                        value={varient?.value}
                        onChange={(e) => handleChange(e, index)}
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        name="price"
                        value={varient?.price}
                        onChange={(e) => handleChange(e, index)}
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, index)}
                        name="sale_price"
                        value={varient?.sale_price}
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, index)}
                        name="discount"
                        value={varient?.discount}
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        value={varient?.quantity}
                        onChange={(e) => handleChange(e, index)}
                        name="quantity"
                        className="input"
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        name="weight"
                        value={varient?.weight}
                        className="input"
                        placeholder="gram"
                        onChange={(e) => handleChange(e, index)}
                      />
                    </td>
                    <td style={{ padding: "0px 0px" }}>
                      <td style={{ border: "none" }}>
                        <input
                          type="text"
                          name="length"
                          value={varient?.dimensions?.length}
                          className="input"
                          placeholder="Length"
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td style={{ border: "none" }}>
                        <input
                          type="text"
                          name="width"
                          value={varient?.dimensions?.width}
                          className="input"
                          placeholder="Width"
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                      <td style={{ border: "none" }}>
                        <input
                          type="text"
                          name="height"
                          value={varient?.dimensions?.height}
                          className="input"
                          placeholder="Height"
                          onChange={(e) => handleChange(e, index)}
                        />
                      </td>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="date"
                        value={YYYYMMDD(varient?.manufacturing_date)}
                        name="manufacturing_date"
                        className="input"
                        onChange={(e) => handleChange(e, index)}
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="date"
                        value={YYYYMMDD(varient?.expire_date)}
                        name="expire_date"
                        className="input"
                        onChange={(e) => handleChange(e, index)}
                      />
                    </td>
                    <td>
                      <MdDelete
                        className="text-red-600 cursor-pointer text-2xl"
                        onClick={() => handleDeleteVarient(index)}
                      />
                    </td>
                  </tr>
                ))}
              </table>
              <div className="cp flex justify-end">
                <button className="submit" onClick={handleAddVarients}>
                  Add Row
                </button>
              </div>
            </div>
          </TableLayoutComp>
          {initialValues?.type === "simple" && (
            <TableLayoutComp title={"Pricing"}>
              <div className="cp">
                <div className="item-pricing">
                  <div>
                    <label htmlFor="price" className="label">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={initialValues?.price}
                      className={`input ${error.price && "customeErrorInput"}`}
                      placeholder="Enter Price"
                      onChange={handleChange}
                    />
                    {error?.price && (
                      <span className="customeErrorMessage">{error.price}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="sale_price" className="label">
                      Sale Price
                    </label>
                    <input
                      type="text"
                      name="sale_price"
                      className="input"
                      value={initialValues?.sale_price}
                      placeholder="Enter Sale Price"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="discount" className="label">
                      Discount
                    </label>
                    <input
                      type="text"
                      name="discount"
                      className="input"
                      value={initialValues?.discount}
                      placeholder="Enter Discount"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="w-full flex gap-2">
                  <div>
                    <label htmlFor="quantity" className="label">
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={initialValues?.quantity}
                      className="input"
                      placeholder="Enter Quantity"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="Dimensions" className="label">
                      Dimensions
                    </label>
                    <div className="w-full flex gap-2">
                      <input
                        type="text"
                        name="length"
                        value={initialValues?.dimensions?.length}
                        className="input"
                        placeholder="Length"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="width"
                        value={initialValues?.dimensions?.width}
                        className="input"
                        placeholder="Width"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="height"
                        value={initialValues?.dimensions?.height}
                        className="input"
                        placeholder="Height"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="weigth" className="label">
                      Weight (gram)
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={initialValues?.weight}
                      className="input"
                      placeholder="Weight in gram"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </TableLayoutComp>
          )}
          <TableLayoutComp
            title={"List of FAQ's"}
            addButton={true}
            buttonCount={handleAddFAQ}
          >
            {initialValues?.faqs?.values?.map((item, index) => (
              <div key={index} className="listoffaqsCard cp relative">
                {initialValues?.faqs?.values?.length > 1 && (
                  <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-red-300 rounded-full faqremove"
                    onClick={() => handleRemoveFAQ(index)}
                  >
                    <AiOutlineClose size={20} />
                  </button>
                )}

                <div>
                  <label htmlFor={`ques-${index}`} className="label">
                    Your Question <span className="span">*</span>
                  </label>
                  <input
                    type="text"
                    id={`ques-${index}`}
                    name="ques"
                    className="input"
                    placeholder="Your Question"
                    value={item.ques}
                    onChange={(e) =>
                      handleFAQChange(index, "ques", e.target.value)
                    }
                  />
                </div>

                <div className="cmt">
                  <JoditTextEditor
                    initialValues={item.ans}
                    setInitialValues={(newValue) =>
                      handleFAQChange(index, "ans", newValue)
                    }
                  />
                </div>
              </div>
            ))}
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Publish"}>
            <div className="publishCard">
              <div className="publishDate">
                <label htmlFor="publish" className="title">
                  Publish Date
                </label>
                <input
                  type="date"
                  name="publish"
                  value={initialValues?.publish}
                  id="publish"
                  className="publishInput input"
                  onChange={handleChange}
                />
              </div>
              <div className="checkbox flex flex-col">
                <label htmlFor="featured" className="flex gap-2">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={initialValues?.featured}
                    onChange={handleChange}
                  />
                  Featured Product
                </label>

                <label htmlFor="hot" className="flex gap-2">
                  <input
                    type="checkbox"
                    name="hot"
                    checked={initialValues?.hot}
                    id="hot"
                    onChange={handleChange}
                  />
                  Hot Product
                </label>
              </div>
              <hr className="horizontalRuler" />
              <div className="publishButton">
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="cancel" onClick={handleCancle}>
                  Cancel
                </button>
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Slug"}>
            <div className="slugCard">
              <input
                type="text"
                value={initialValues?.slug}
                className="slug input"
                placeholder="Slug"
                onChange={handleChange}
              />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Brands"}>
            <div className="brandsCard cp">
              <SingleSelectDropdown
                endPoint={"configuration/brands"}
                value={initialValues?.brand}
                setValue={(value) => {
                  setInitialValues((pre) => ({
                    ...pre,
                    brand: value,
                  }));
                }}
              />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Tags"}>
            <div className="tagsCard cp">
              <MultiSelectDropdown
                endPoint={"configuration/tages"}
                value={initialValues?.tages}
                setValue={(value) => {
                  setInitialValues((pre) => ({
                    ...pre,
                    tages: value,
                  }));
                }}
              />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Categories"}>
            <div className="tagsCard cp">
              <JsTreeCheckbox
                data={categories}
                defaultChecked={defaultCategories}
                onCheck={(checked) => {
                  setInitialValues((pre) => ({
                    ...pre,
                    categories: checked,
                  }));
                }}
              />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Featured Image"} required={true}>
            <div className="featuredImage w-full cp">
              <FileUplodsModule
                initialValues={image}
                setInitialValues={(files) => {
                  handleFileUploads(files[0]?.file);
                }}
                type="featured_image"
              />
            </div>
          </TableLayoutComp>
          {initialValues?.type === "simple" && (
            <TableLayoutComp title={"Gallery Image"} required={true}>
              <div className="featuredImage w-full cp">
                <FileUplodsModule
                  initialValues={gallery}
                  setInitialValues={(files) => {
                    handleGalleryUploads(files);
                  }}
                  type="gallery"
                />
              </div>
            </TableLayoutComp>
          )}
        </div>
      </div>
      {showGalleryModal && (
        <div className="fixed inset-0 bg-opacity-25 flex justify-center items-center z-[999]">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[60%] max-w-2xl relative cp max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer"
              onClick={() => setShowGalleryModal(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold cmb mb-4">
              Upload Variant Gallery
            </h2>

            <VarientFileUploadModule
              initialValues={
                initialValues.varients[selectedVariantIndex]?.gallery
              }
              setInitialValues={(files) => {
                handleVariantGalleryUpload(files, selectedVariantIndex);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
