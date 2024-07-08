import { ProjectModel } from '@novatoriteam/validators';
import { FC } from 'react';
import ProjectForm from '@/src/app/projects/forms/ProjectForm';
import { get } from '@/src/shared/api/get-function';
import { IdParamInterface } from '@/src/shared/types/interfaces/id-param.interface';

const EditProjectPage: FC<IdParamInterface> = async (
  props: IdParamInterface,
) => {
  const project = await get<ProjectModel>({ url: 'projects' }, props.params.id);

  return <ProjectForm project={project.data} />;
};

export default EditProjectPage;
