import { useState } from "react";
import FileUplodsModule from "../../../components/modules/FileUplodsModule";
import SubHeader from "../../../components/SubHeader";
import TableLayoutComp from "../../../components/Tables/TableLayoutComp";
import GridEditor from "../../../components/textEditor/GridEditor";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    publishDate: "2025-08-19",
    template: "",
    slug: "",
  });

  const handleEditorChange = (newContent) => {
    setFormData((prev) => ({ ...prev, content: newContent }));
  };

  return (
    <div>
      <SubHeader searchFilter={false}></SubHeader>
      <div className="cmsPage flex">
        <div className="itemLeft">
          <TableLayoutComp title={"Main Details of Page"}>
            <div className="detailPageCard cp">
              <div>
                <label htmlFor="name" className="label">
                  Page Title <span className="span">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="Enter Title"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="content" className="label">
                  Content<span className="span">*</span>
                </label>
                <GridEditor
                  value={formData.content}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </TableLayoutComp>
        </div>
        <div className="itemRight">
          <TableLayoutComp title={"Publish"}>
            <div className="publishCard cp">
              <div>
                <label htmlFor="date" className="label">
                  Publish Date
                </label>
                <input
                  type="text"
                  className="input"
                  id="date"
                  value={formData.publishDate}
                  onChange={(e) =>
                    setFormData({ ...formData, publishDate: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="template" className="label">
                  Template
                </label>
                <select
                  name="template"
                  id="template"
                  className="input"
                  value={formData.template}
                  onChange={(e) =>
                    setFormData({ ...formData, template: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select Template
                  </option>
                </select>
              </div>
              <div className="flex gap-4 cmt">
                <button className="submit">Submit</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Slug"}>
            <div className="cp">
              <input
                type="text"
                className="input"
                placeholder="Slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
              />
            </div>
          </TableLayoutComp>
          <TableLayoutComp title={"Featured Image"}>
            <div className="cp">
              <FileUplodsModule />
            </div>
          </TableLayoutComp>
        </div>
      </div>
    </div>
  );
}

export default Create;
