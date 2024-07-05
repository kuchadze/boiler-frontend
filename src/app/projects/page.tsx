import styles from './ProjectsPage.module.scss';
import { ProjectTableDataSourceInterface } from '@/src/app/projects/interfaces/project-table-data-source.interface';
import { ProjectInterface } from '@/src/app/projects/interfaces/project.interface';
import { projectTableColumns } from '@/src/app/projects/utils/project-table.columns';
import { DataInterface, get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';

const ProjectsPage = async (props: {
  searchParams: { [key: string]: string };
}): Promise<JSX.Element> => {
  const limit: number = parseInt(props.searchParams.limit || '5', 10);
  const offset: number = parseInt(props.searchParams.offset || '0', 10);

  const projects: DataInterface<ProjectInterface[]> = await get<
    ProjectInterface[]
  >({
    url: 'projects',
    queryParameters: {
      ...props.searchParams,
      limit,
      offset,
    },
  });

  const dataSource: ProjectTableDataSourceInterface[] = projects.data.map(
    (project: ProjectInterface) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      budget: project.budget,
      status: project.status,
    }),
  );

  return (
    <div className={styles.container}>
      <Table<ProjectTableDataSourceInterface[]>
        resource={'projects'}
        dataSource={dataSource}
        count={projects.count}
        limit={5}
        columns={projectTableColumns}
      />
    </div>
  );
};

export default ProjectsPage;
