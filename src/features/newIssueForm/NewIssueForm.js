import React, { useState, useEffect } from "react";
import { SaveNewIssueBtn, SaveNewIssueBtnDisabled } from "./SaveNewIssueBtn";
import { Link } from "react-router-dom";
import './NewIssueForm.css';
import {
    validationTitle,
    validationDescription,
    validationStoryPoints
} from "../../supportFunctions/formValidation";
import Breadcrumbs from "./Breadcrumbs ";


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = () => {
        setDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [calcLength, setCalcLength] = useState(0);
    const [minValueError, setMinValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'minValue':
                    Number(value)
                        ? Number(value) < validations[validation]
                            ? setMinValueError(true)
                            : setMinValueError(false)
                        : setMinValueError(true)
                    break
                case 'maxValue':
                    Number(value)
                        ? Number(value) > validations[validation]
                            ? setMaxValueError(true)
                            : setMaxValueError(false)
                        : setMaxValueError(true)
                    break
            }
        }
        setCalcLength(value.length);
    }, [value]);


    return {
        isEmpty,
        minLengthError,
        calcLength,
        minValueError,
        maxValueError
    }
}


export default function NewIssueForm() {
    const title = useInput('', validationTitle);
    const storyPoints = useInput('', validationStoryPoints);
    const description = useInput('', validationDescription);
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');


    let btnProps = <SaveNewIssueBtnDisabled />;
    if (!title.isEmpty && !title.minLengthError) {
        btnProps = <SaveNewIssueBtn
            title={title.value}
            storyPoints={storyPoints.value}
            description={description.value}
            priority={priority ? priority : 'undefined'}
            status={status ? status : 'todo'}
        />
    }


    return (
        <>
            <Breadcrumbs />
            <form className="form-title">
                {(title.isDirty && title.isEmpty) &&
                    <div className="new-issue__validation-error new-issue__validation-error-title">
                        ???????????????? ???????????? ??????????????????????
                    </div>
                }
                {(title.isDirty && title.minLengthError && !title.isEmpty) &&
                    <div className="new-issue__validation-error new-issue__validation-error-title">
                        ?????????????? 3 ?????????????? ?? ????????????????
                    </div>
                }
                {title.calcLength > 0 &&
                    <div id="new-issue__title-calc">{title.calcLength}/{validationTitle.maxLength}
                    </div>
                }
                <input
                    value={title.value}
                    onChange={e => title.onChange(e)}
                    onBlur={e => title.onBlur(e)}
                    required
                    placeholder="Title * (???????????????? 100 ????????????????)"
                    maxLength={100}
                    type="text"
                    className='common-forms-style new-issue__title'
                />
                <div>
                    <select
                        onChange={e => { setPriority(e.target.value) }}
                        size={'1'}
                        defaultValue={'empty'}
                        className='common-forms-style new-issue__select-priority'>
                        <option disabled value='empty'>Priority</option>
                        <option value="critical">critical</option>
                        <option value="major">major</option>
                        <option value="normal">normal</option>
                        <option value="minor">minor</option>
                        <option value="undefined" >undefined</option>
                    </select>

                    <input
                        type="number"
                        onChange={e => storyPoints.onChange(e)}
                        onBlur={e => storyPoints.onBlur(e)}
                        min="1"
                        max="10"
                        placeholder="Story points"
                        className='common-forms-style new-issue__input-other'
                    />
                    {(storyPoints.isDirty && storyPoints.minValueError) &&
                        <div className="new-issue__validation-error new-issue__validation-error-points">
                            ?????????????????????? ?????????? ???? ?????????? 1
                        </div>
                    }
                    {(storyPoints.isDirty && storyPoints.maxValueError && !storyPoints.minValueError) &&
                        <div className="new-issue__validation-error new-issue__validation-error-points">
                            ?????????????????????? ?????????? ???? ?????????? 10
                        </div>
                    }

                    <select
                        onChange={e => { setStatus(e.target.value) }}
                        size={'1'}
                        defaultValue={'empty'}
                        className='common-forms-style new-issue__input-other'>
                        <option disabled value='empty'>Status</option>
                        <option value="todo">TO DO</option>
                        <option value="in_progress">IN PROGRESS</option>
                        <option value="test">TEST</option>
                        <option value="done">DONE</option>
                    </select>
                </div>

                <textarea
                    onChange={e => description.onChange(e)}
                    onBlur={e => description.onBlur(e)}
                    placeholder="Description (???????????????? 300 ????????????????)"
                    maxLength={300}
                    className='common-forms-style new-issue__description'
                />

                {description.calcLength > 0 &&
                    <div id="new-issue__descr-calc">
                        {description.calcLength}/{validationDescription.maxLength}
                    </div>
                }

                {btnProps}

                <nav>
                    <Link to="/" >
                        <div className='new-issue__btn-go-back'>
                            <p >Go back</p>
                        </div>
                    </Link>
                </nav >
            </form>
        </>
    )
}
