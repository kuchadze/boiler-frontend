import { ProjectModel } from '@novatoriteam/validators';
import { FC } from 'react';
import styles from './ProjectsPage.module.scss';
import { projectTableColumns } from '@/src/app/projects/utils/project-table.columns';
import { get } from '@/src/shared/api/get-function';
import Table from '@/src/shared/components/Table/Table';
import { SearchParamsInterface } from '@/src/shared/types/interfaces/search-params.interface';

const ProjectsPage: FC<SearchParamsInterface> = async (
  props: SearchParamsInterface,
) => {
  const projects = await get<ProjectModel[]>({
    url: 'projects',
    queryParameters: {
      offset: 0,
      limit: 5,
      ...props.searchParams,
    },
  });

  return (
    <div className={styles.container}>
      <Table<ProjectModel[]>
        resource={'projects'}
        dataSource={projects.data}
        count={projects.count}
        limit={5}
        columns={projectTableColumns}
      />
    </div>
  );
};

export default ProjectsPage;
