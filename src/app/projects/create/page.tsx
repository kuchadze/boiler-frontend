import { JSX } from 'react';
import styles from './CreateProjectPage.module.scss';
import CreateProjectForm from '@/src/app/projects/create/components/CreateProjectForm';
import { ProjectInterface } from '@/src/app/projects/interfaces/project.interface';
import { DataInterface, get } from '@/src/shared/api/get-function';

const CreateProjectPage = async (props: {
  searchParams: { id: number };
}): Promise<JSX.Element> => {
  const project: DataInterface<ProjectInterface> = await get<ProjectInterface>(
    {
      url: 'projects',
    },
    props.searchParams.id,
  );

  return (
    <div className={styles.container}>
      <CreateProjectForm project={project.data} id={props.searchParams.id} />
    </div>
  );
};

export default CreateProjectPage;
