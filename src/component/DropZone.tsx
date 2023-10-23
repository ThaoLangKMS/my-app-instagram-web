import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiMiniArrowUpTray } from "react-icons/hi2";

interface AcceptedFile extends File {
  preview: string;
}

interface RejectedFile {
  file: File;
  errors: Array<{ code: string; message: string }>;
}

interface DropzoneProps {
  className?: string;
}

const DropZone: React.FC<DropzoneProps> = ({ className }) => {
  const [files, setFiles] = useState<AcceptedFile[]>([]);
  const [rejected, setRejected] = useState<RejectedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[]) => {
    const newFiles: AcceptedFile[] = [];
    const newRejectedFiles: RejectedFile[] = [];

    acceptedFiles.forEach((file) => {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (isImage || isVideo) {
        const preview = URL.createObjectURL(file);
        newFiles.push(Object.assign(file, { preview }));
      } else {
        newRejectedFiles.push({
          file,
          errors: [
            {
              code: "rejected",
              message: "File type is not supported",
            },
          ],
        });
      }
    });

    setFiles((previousFiles) => [...previousFiles, ...newFiles]);
    console.log("ALL FILES", newFiles);
    setRejected((previousFiles) => [...previousFiles, ...newRejectedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop: (acceptedFiles: File[], rejectedFiles: File[]) =>
      onDrop(acceptedFiles, rejectedFiles),
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name: string) => {
    setFiles((currentFiles) =>
      currentFiles.filter((file) => file.name !== name)
    );
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name: string) => {
    setRejected((currentRejected) =>
      currentRejected.filter((rejectedFile) => rejectedFile.file.name !== name)
    );
  };

  return (
    <form>
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps({ name: "file" })} />
        <div className="flex flex-col items-center justify-center gap-4 ">
          <HiMiniArrowUpTray className="h-5 w-5 fill-current" size={30} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="flex items-center space-x-10">
              <Image
                src="/gallery.png"
                alt="Your Image"
                width={100}
                height={100}
              />
              <p>Drag & drop files here, or click to select files</p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <button
          onClick={removeAll}
          className="btn btn-xs sm:btn-sm max-w-xl btn-wide "
        >
          Remove all files
        </button>
        <ul className="flex mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 flex-wrap">
          {files.map((file) => (
            <li
              key={file.name}
              className="relative h-32 rounded-md shadow-lg mx-4"
            >
              <div className="h-5 w-5 fill-white transition-colors hover:fill-rose-400 ">
                <IoClose size={20} onClick={() => removeFile(file.name)} />
              </div>

              {file.type.startsWith("image/") ? (
                <div className="avatar">
                  <div className="rounded-2xl">
                    <img
                      src={file.preview}
                      alt={file.name}
                      width={100}
                      height={100}
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                      }}
                      className=" w-full  h-full max-w-xl max-h-xl rounded-md object-contain"
                    />
                  </div>
                </div>
              ) : file.type.startsWith("video/") ? (
                <video
                  src={file.preview}
                  width={100}
                  height={100}
                  controls
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  className=" w-full h-full max-w-xl max-h-xl rounded-md object-contain"
                />
              ) : null}

              <p className="mt-2 text-[12px] font-medium text-stone-500 text-center">
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        {/* <h3 className="title mt-24 border-b pb-3 text-lg font-semibold text-stone-600">
          Rejected Files
        </h3> */}
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-sm font-medium text-stone-500">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error, index) => (
                    <li key={index}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-1 rounded-md border border-rose-400 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
                onClick={() => removeRejected(file.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default DropZone;
