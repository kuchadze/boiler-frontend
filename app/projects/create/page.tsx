import { JSX } from 'react';
import styles from './CreateProjectPage.module.scss';
import { DataInterface, get } from '@/app/Api/get-function';
import CreateProjectForm from '@/app/projects/create/components/CreateProjectForm';
import { ProjectInterface } from '@/app/projects/interfaces/project.interface';

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
