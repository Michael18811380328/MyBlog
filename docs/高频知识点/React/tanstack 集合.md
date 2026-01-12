# tanstack 集合

tanstack 是一个系列的前端工具库，包括了查询，路由，表单，表格，图标等常用的 UI

[https://tanstack.com/](https://tanstack.com/ "https://tanstack.com/")

[https://github.com/TanStack](https://github.com/TanStack "https://github.com/TanStack")

面向web开发人员的高质量开源软件，用于Web应用程序、路由、状态管理、数据可视化、数据网格/表等的无头、类型安全且功能强大的实用程序，可以通过不同的导入进行分别引用。类似一个集成了 react-router, react-query, react-table, reactstrap 的一个系统。

好处一个工具库完成很多功能，其他人不少在用

缺点是需要学习成本，然后需要把已有项目的工具库全部替换了，可以自己做个小 demo 试试

#### query 查询组件

[https://github.com/TanStack/query](https://github.com/TanStack/query "https://github.com/TanStack/query")

Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.

支持异步的状态管理和数据查询

```javascript
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```

#### table 表格组件

[https://github.com/TanStack/table](https://github.com/TanStack/table "https://github.com/TanStack/table")

Headless UI for building powerful tables

#### router 路由

[https://github.com/TanStack/router](https://github.com/TanStack/router "https://github.com/TanStack/router")

Fully typesafe Router for React (and friends) w/ built-in caching,

#### virtual 虚拟列表

[https://github.com/TanStack/virtual](https://github.com/TanStack/virtual "https://github.com/TanStack/virtual")

Headless UI for Virtualizing Large Element Lists in JS/TS

#### form 表单

[https://github.com/TanStack/form](https://github.com/TanStack/form "https://github.com/TanStack/form")

Headless, performant, and type-safe form state management

```javascript
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { useForm } from '@tanstack/react-form'
import type { AnyFieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export default function App() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          {/* A type-safe field component*/}
          <form.Field
            name="firstName"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'A first name is required'
                  : value.length < 3
                    ? 'First name must be at least 3 characters'
                    : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') && 'No "error" allowed in first name'
                )
              },
            }}
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <label htmlFor={field.name}>First Name:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div>
          <form.Field
            name="lastName"
            children={(field) => (
              <>
                <label htmlFor={field.name}>Last Name:</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')!

createRoot(rootElement).render(<App />)
```

#### charts 图表

[https://github.com/TanStack/react-charts](https://github.com/TanStack/react-charts "https://github.com/TanStack/react-charts")

Simple, immersive & interactive charts for React

注意：图表 No Longer Maintained
