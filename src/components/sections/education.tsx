import { GraduationCapIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const EducationSection = () => {
  return (
    <div className="mt-28" id="education">
      <h3
        className="text-2xl font-semibold relative inline"
        id="education-title"
      >
        Education
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <div className="mt-6">
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="relative">
            <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
            <div className="absolute w-[1px] h-full bg-neutral-600 left-1/2 transform -translate-x-1/2 top-0 -z-10" />
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold">
              IK Gujral Punjab Technical University, Jalandhar
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                B.Tech,{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dashed">CSE</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      Computer Science and Engineering 
                    </p>
                  </TooltipContent>
                </Tooltip>{" "}
                <span className="text-neutral-600">|</span> 2022 - 2026
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="relative">
            <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
            <div className="absolute w-[1px] h-full bg-neutral-600 left-1/2 transform -translate-x-1/2 top-0 -z-10" />
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold">
              Kendriya Vidyalaya,Ara
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                High School{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dashed">Science</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      Physics, Chemistry, Mathematics,Computer Science
                    </p>
                  </TooltipContent>
                </Tooltip>{" "}
                <span className="text-neutral-600">|</span> 82.3% Percentage{" "}
                <span className="text-neutral-600">|</span> 2020 - 2021
              </p>
            </div>

            <div className="mt-3">
              <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                <li>
                  Consistently maintained excellent academic performance throughout school.
                </li>
                <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                  <li>
                     Participated in various cultural, sports, and science events, developing teamwork and leadership skills.
                  </li>
                  <li>Known for strong discipline, dedication, and a positive attitude towards both studies and extracurriculars.</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3">
          <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
          <div>
            <h4 className="text-lg font-semibold">
             DAV Public School, Ara
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                CBSE (10th Class){" "}
                <span className="text-neutral-600">|</span> 78% Percentage{" "}
                <span className="text-neutral-600">|</span> 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
